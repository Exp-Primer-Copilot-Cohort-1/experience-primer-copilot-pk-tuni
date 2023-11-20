function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
    return {
        getSkills: function() {
        return skills;
        },
        addSkill: function(skill) {
        skills.push(skill);
        }
    }
    }