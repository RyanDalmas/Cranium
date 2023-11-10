import { Entity, Property, JsonType } from "@mikro-orm/core";
import BaseEntity from "./BaseEntity";
import { Solution } from "../types/engine/Solution";

@Entity()
export default class UserSession extends BaseEntity {

    @Property()
        username: string;

    @Property({
        nullable: true,
        type: JsonType
    })
        solution?: Solution;

    @Property()
        currentMove: number;
    
    constructor(username: string) {
        super();
        this.username = username;
        this.currentMove = -1;
    }

    setSolution(solution: Solution) {
        this.solution = solution;
        this.currentMove = 1;
    }

    public toDto() {
        return {
            username: this.username,
            moves: this.solution?.moves ?? [],
            index: (this.currentMove - 1),
            manifest: this.solution?.final_manifest ?? []
        }
    }
}