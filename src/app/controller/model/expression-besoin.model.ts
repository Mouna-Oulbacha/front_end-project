import {BudgetEntite} from "./budget-entite.model";
import {ExpressionBesoinProduit} from "./expression-besoin-produit.model";

export class ExpressionBesoin {
  public id : number;
  public total : number;
  public ref : string;
  public dateExpressionBesoin : Date;
  public  budgetEntite : BudgetEntite;
  public expressionBesoinProduits = new Array<ExpressionBesoinProduit>;

}
