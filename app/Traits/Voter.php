<?php

namespace App\Traits;

use App\Models\Option;
use App\Models\Poll;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

trait Voter
{

    /**
     * Stores poll id
     * @var int
     */
    protected int $pollId;

    /**
     * Stores all options available for poll
     * @var array
     */
    protected array $options;

    /**
     * Create new poll
     *
     * @param Request $request
     * @return $this
     */
    public function createPoll(Request $request)
    {

        $this->options = $request->input('options');

        $poll = Poll::create([
            "pollTitle" => $request->input('pollTitle'),
            "pollDescription" => $request->input('pollDescription'),
            "creatorId" => Auth::id(),
            "groupId" => $request->input('groupsId')
        ]);

        $this->pollId = $poll->id;

        return $this;
    }

    /**
     * Inserts options to poll
     */
    public function addOptions()
    {
        // Checks if options array is bigger than 1
        if(count($this->options) <= 1){
            abort(400, "Options array was not passed or there is only 1 option!");
        }

        // Create options
        foreach ($this->options as $option) {
            Option::create([
                "option" => $option,
                "pollId" => $this->pollId
            ])->save();
        }
    }
}
