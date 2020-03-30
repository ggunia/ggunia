interface Actor {
  name: string,
  id: number,
  popularity?: number,
  known_for_department?: string,
  profile_path?: string,
  adult?: boolean,
  gender?: number,
}

export interface ActorType extends Actor {
  known_for_department: string,
}

export interface ActorDetailType extends Actor {
  biography: string,
}
