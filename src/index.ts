import { Model } from "objection";

class SoftDeleteQueryBuilder<
  M extends SoftDeleteModel,
  R = M[]
> extends Model.QueryBuilder<M, R> {
  SingleQueryBuilderType!: SoftDeleteQueryBuilder<M, M>;
}

export default class SoftDeleteModel extends Model {
  QueryBuilderType!: SoftDeleteQueryBuilder<this, this[]>;
}
