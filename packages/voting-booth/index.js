class VotingBooth {
  constructor() {
    this.candidates = {};
  }

  castVote(candidateName) {
    if(!(candidateName in this.candidates)) {
      this.candidates[candidateName] = 0;
    }

    ++this.candidates[candidateName];
  }

  getWinningCandidates() {
    const sortedVotes = Object.entries(this.candidates)
      .sort(([aName, aVotes], [bName, bVotes])=> aVotes - bVotes)
      .reverse()

    const topVote = sortedVotes[0][1];

    const winner = sortedVotes
      .filter(([candidate, votes])=> {
        return votes === topVote;
      })
      .map(([candidate, votes])=> candidate)
      .sort();

    return winner;
  }
}

module.exports = VotingBooth;
