const VotingBooth = require('./index.js');

const assert = require('assert')

const votingBooth = new VotingBooth();

describe('Voting Booth', function() {

  it('counts the number of votes for a candidate', function() {
    assert.equal(votingBooth.candidates[`foo`], undefined);
    votingBooth.castVote(`foo`);
    assert.equal(votingBooth.candidates[`foo`], 1);
  })

  it('determines the winner', function() {
    votingBooth.castVote(`foo`);
    votingBooth.castVote(`bar`);
    assert.ok(Array.isArray(votingBooth.getWinningCandidates()));
    assert.equal(votingBooth.getWinningCandidates()[0], `foo`);
  })

  it('handles tie votes', function() {
    votingBooth.castVote(`bar`);
    votingBooth.castVote(`baz`);
    assert.ok(Array.isArray(votingBooth.getWinningCandidates()));
    assert.equal(votingBooth.getWinningCandidates().length, 2);
    assert.equal(votingBooth.getWinningCandidates()[0], `bar`);
    assert.equal(votingBooth.getWinningCandidates()[1], `foo`);
  })
})
