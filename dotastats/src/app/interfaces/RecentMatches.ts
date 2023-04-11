export default interface recentMatches {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: number;
  lobby_type: number;
  hero_id: number;
  start_time: number;
  version: any;
  kills: number;
  deaths: number;
  assists: number;
  skill: any;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: any;
  lane_role: any;
  is_roaming: any;
  cluster: number;
  leaver_status: number;
  party_size: number;
}
