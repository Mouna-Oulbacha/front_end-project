import {Budget} from "./budget.model";
import {EntiteAdmin} from "./entite-admin.model";

export class BudgetEntite {
  public id: number;
  public ref: string;
  public entiteAdmin: EntiteAdmin;
  public budget: Budget;
  public montantInvistissement: number;
  public montantFonctionnement: number;
  public montantTotal: number;
}
