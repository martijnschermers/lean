import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from '@lean/api-interfaces';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('/api/exercise');
  }

  getExercise(id: string | null): Observable<Exercise> {
    return this.http.get<Exercise>(`/api/exercise/${id}`);
  }

  createExercise(value: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>('/api/exercise', value)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  updateExercise(value: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`/api/exercise/${value._id}`, value);
  }

  deleteExercise(exerciseId: string): Observable<Exercise> {
    return this.http.delete<Exercise>(`/api/exercise/${exerciseId}`);
  }
}
