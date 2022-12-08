import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GroupWorkoutInterface } from "@lean/api-interfaces";

@Injectable({
  providedIn: "root"
})
export class GroupWorkoutService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<GroupWorkoutInterface[]> {
    return this.http.get<GroupWorkoutInterface[]>("/api/group-workout");
  }

  addGroupWorkout(value: GroupWorkoutInterface): Observable<GroupWorkoutInterface> {
    return this.http.post<GroupWorkoutInterface>("/api/group-workout", value);
  }

  findOne(id: string | null): Observable<GroupWorkoutInterface> {
    return this.http.get<GroupWorkoutInterface>(`/api/group-workout/${id}`);
  }

  joinGroupWorkout(groupWorkout: GroupWorkoutInterface): Observable<GroupWorkoutInterface> {
    return this.http.post<GroupWorkoutInterface>(`/api/group-workout/${groupWorkout._id}/join`, {});
  }
}
