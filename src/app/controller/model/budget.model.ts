import {BudgetEntite} from "./budget-entite.model";

export class Budget {
  public id: number;
  public code: string;
  public montantInvistissement: number;
  public montantFonctionnement: number;
  public montantTotal: number;
  public annee: number;
  public budgetEntite: Array<BudgetEntite>;
}
