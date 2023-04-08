import {AppelAchatProduit} from "./appel-achat-produit.model";

export class AppelAchat {
  public id: number;
  public code: string;
  public dateAppelAchat: Date;
  public total: number;
  public appelAchatProduit=new AppelAchatProduit();

}
