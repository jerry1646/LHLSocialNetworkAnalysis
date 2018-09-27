var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },

  followMost: function(){
    var nFollow = 0;
    var mostFollowPerson = "";
    var mostFollowNum = 0;
    var mostFollowAge = 0;

    for (var profile in this){
       if (profile.length === 3){
        nFollow = this[profile]['follows'].length;
        if (nFollow > mostFollowNum){
          mostFollowNum = nFollow;
          mostFollowPerson = this[profile]['name'];
          mostFollowAge = this[profile]['age'];
        }
      }
    }
    console.log(mostFollowAge + " year-old " + mostFollowPerson + " follows the most people. He/she follows " + mostFollowNum + " folks!");
  },

  listProfiles: function(){
    for (var profile in this){
       if (profile.length === 3){
        console.log(this[profile]['name'] + " is " + this[profile]['age'] + " years old. He/she is followed by "+ this.whoFollowers(this[profile]));
       }
     }
  },

  whoFollowers: function(profile){
    var followers = [];
    for (var iD of profile['follows']){
      followers.push(this[iD]['name']);
    }
    return followers.join(', ');
  },


  calcFollowers: function(){
    // Initialize numFollowers key

    for (var user in this){
      if (user.length === 3){
        this[user]['numFollowers'] = 0;
      }
    }

    for (var profile in this){
      if (profile.length === 3){
        // console.log(this[profile]);
        for (var iD of this[profile]['follows']){
          this[iD]['numFollowers'] += 1;
        }
      }
    }
  },

  mostFollower: function(){
    this.calcFollowers();
    var mostFollowerName = "";
    var mostFollowerNum = 0;
    for (var profile in this){
      if (profile.length === 3){

        if (this[profile]['numFollowers'] > mostFollowerNum){
          mostFollowerName = this[profile]['name'];
          mostFollowerNum = this[profile]['numFollowers'];
        }
      }
    }
    console.log(mostFollowerName + " has the most followers: He/she has " + mostFollowerNum + " followers!");
  },

  mostFollowerAge: function(age){
    this.calcFollowers();
    var mostFollowerName = "";
    var mostFollowerNum = 0;
    for (var profile in this){
      if (profile.length === 3){

        if (this[profile]['numFollowers'] > mostFollowerNum && this[profile]['age'] > age){
          mostFollowerName = this[profile]['name'];
          mostFollowerNum = this[profile]['numFollowers'];
        }
      }
    }
    console.log(mostFollowerName + " has the most followers among all that are over " + age + ": He/she has " + mostFollowerNum + " followers!");
  },

  followMostAge: function(age){
    var nFollow = 0;
    var mostFollowPerson = "";
    var mostFollowNum = 0;
    var mostFollowAge = 0;

    for (var profile in this){
       if (profile.length === 3){
        nFollow = this[profile]['follows'].length;
        if (nFollow > mostFollowNum && this[profile]['age'] > age){
          mostFollowNum = nFollow;
          mostFollowPerson = this[profile]['name'];
          mostFollowAge = this[profile]['age'];
        }
      }
    }
    console.log(mostFollowAge + " year-old " + mostFollowPerson + " follows the most people among all that are over " + age + ": He/she follows " + mostFollowNum + " folks!");
  },

  checkFollowBack: function(){
    for (var profile in this){
      if (profile.length === 3){
        // console.log(this[profile]);
        for (var iD of this[profile]['follows']){
          var followBack = this[iD]['follows'].includes(profile);
          if (!followBack){
            console.log(this[iD]['name'] + " doesn't follow " + this[profile]['name'] + " back!")
          }
        }
      }
    }
  },

  listProfilesReach: function(){
    this.calcFollowers();
    for (var profile in this){
       if (profile.length === 3){
        console.log(this[profile]['name'] + " is " + this[profile]['age'] + " years old. He/she has " + this[profile]['numFollowers'] + " followers and she follows " + this[profile]['follows'].length + " people: in total " + (Number(this[profile]['follows'].length)+Number(this[profile]['numFollowers']))+" connections. \n");
       }
     }
  },

};

// List everyone and for each of them, list the names of who they follow and who follows them
// data.listProfiles();

// Identify who follows the most people
// data.followMost();


// Identify who has the most followers
// data.mostFollower();

// Identify who has the most followers over 30
// data.mostFollowerAge(30)

// Identify who follows the most people over 30
// data.followMostAge(30);

// List those who follow someone that doesn't follow them back
// data.checkFollowBack()

// List everyone and their reach (sum of # of followers and # of followers of followers)
// data.listProfilesReach()