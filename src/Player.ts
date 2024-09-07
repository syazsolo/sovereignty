import { Decision } from "./types";

export abstract class Player {
    abstract strategy(): Decision;
}