import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { ITariff } from '../../models/entities/interfaces/ITariff';
import { Tariff } from '../../models/entities/classes/Tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffsService {

constructor(
  private firestore: Firestore
) { }

//generate me a method called getTariffsByGamingCenterId from firestore database using modular approach as collection, collectionData with query. The collection name is tariffsPerGamingCenter. This method msut return Observables<Tariff[]>

getTariffsByGamingCenterId(gamingCenterId: number): Observable<Tariff[]> {
  const tariffsPerGamingCenterRef = collection(this.firestore, "tariffsPerGamingCenter");
  const q = query(tariffsPerGamingCenterRef, where("gamingCenterId", "==", gamingCenterId.toString()));

  return collectionData(q, { idField : 'id'}).pipe(
    map(actions => actions.map(a => new Tariff(a.id, a["name"])))
  );
}

}
