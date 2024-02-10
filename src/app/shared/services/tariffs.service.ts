import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { Tariff } from '../../models/entities/classes/Tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffsService {


  private tariffs: ITariff[] = [];
  constructor(
    private firestore: Firestore
  ) { }


  getTariffsByGamingCenterId(gamingCenterId: number): Observable<Tariff[]> {
    const tariffsPerGamingCenterRef = collection(this.firestore, "tariffsPerGamingCenter");
    const q = query(tariffsPerGamingCenterRef, where("gamingCenterId", "==", gamingCenterId.toString()));

    return collectionData(q, { idField : 'id'}).pipe(
      map(actions => {
        this.tariffs = actions.map(a => new Tariff(+a.id, a["name"]))
        return this.tariffs;
      })
    );
  }

  getTariffNameByIdFromMemory(tariffId: number): string {
    return this.tariffs.find(t => t.id === tariffId)!.displayName
  }
}
