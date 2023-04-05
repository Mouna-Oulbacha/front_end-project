import {Produit} from "./produit.model";
import {ExpressionBesoin} from "./expression-besoin.model";

export class ExpressionBesoinProduit {
  public id : Number;
  public  quantite : number;
  public code : string;
  public quantiteAccorde : number;
  public quantiteCommande : number;
  public  quantiteLivre : number;
  public quantiteReception : number;
  public  produit :Produit ;
  public  expressionBesoin :ExpressionBesoin ;
}
