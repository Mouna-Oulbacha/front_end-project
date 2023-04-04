import {AppelAchat} from "./appel-achat.model";
//import {Produit} from "./produit.model";


class Produit {
}

export class AppelAchatProduit {
  public id: number;
  public code: string;
  public qteProduit: number;
  public qteRecep: number;
  public qteLivr: number;
  public appelAchat: AppelAchat;
  public produit: Produit;
}
