import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExerciseInterface } from '@lean/api-interfaces';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  getExercises(): Observable<ExerciseInterface[]> {
    return this.http.get<ExerciseInterface[]>('/api/exercise');
  }

  getExercise(id: string | null): Observable<ExerciseInterface> {
    return this.http.get<ExerciseInterface>(`/api/exercise/${id}`);
  }

  createExercise(value: ExerciseInterface): Observable<ExerciseInterface> {
    return this.http.post<ExerciseInterface>('/api/exercise', value)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  updateExercise(value: ExerciseInterface): Observable<ExerciseInterface> {
    return this.http.put<ExerciseInterface>(`/api/exercise/${value._id}`, value);
  }

  deleteExercise(exerciseId: string): Observable<ExerciseInterface> {
    return this.http.delete<ExerciseInterface>(`/api/exercise/${exerciseId}`);
  }
}
