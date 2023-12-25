import { CLUBS, parseKickoffTime } from "./helpers.js";
const game_week = 19;
const url = `https://fantasy.premierleague.com/api/fixtures?event=${game_week}`;
const data = await (await fetch(url)).json();
const fixtures = data.map((d) => {
    return {
        home_team: CLUBS[d.team_h - 1],
        away_team: CLUBS[d.team_a - 1],
        kickoff_time: parseKickoffTime(new Date(d.kickoff_time)), // GMT + 1
    };
});
console.log(fixtures);
//# sourceMappingURL=app.js.map