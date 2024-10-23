class Skill {
    constructor(skillId=null, skill) {
        this.skillId = skillId;
        this.skill = skill;
    }

    get skillId() {
        return this.skillId;
    }

    set skillId(value) {
        this.skillId = value;
    }

    get skill() {
        return this.skill;
    }

    set skill(value) {
        this.skill = value;
    }
}

module.exports = Skill;
