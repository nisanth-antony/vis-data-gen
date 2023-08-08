import { AsbuiltShape } from './asbuiltShape';

export interface AsbuiltShapeLine extends AsbuiltShape {
  type: AsbuiltShape.TypeEnum;
  // vertices: Array<Array<number>>;
}
