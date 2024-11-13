import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AlertedTokenDocument = mongoose.HydratedDocument<AlertedToken>;

@Schema()
export class AlertedToken {
  @Prop()
  tokenContractAddress: string;
  @Prop()
  tokenPairContractAddress: string;
  @Prop()
  swapHashes: string[];
  @Prop()
  name: string;
  @Prop()
  swapsCount: number;
  @Prop()
  tokenPairAge: string;
  @Prop()
  firstBuyHash: string;
  @Prop()
  firstBuyTime: string;
  @Prop()
  twentiethBuyHash: string;
  @Prop()
  twentiethBuyTime: string;
  @Prop()
  symbol: string;
  @Prop()
  decimal: string;
  @Prop()
  from: string;
  @Prop()
  to: string;
  @Prop()
  tokenAge: string;
}

export const AlertedTokenSchema = SchemaFactory.createForClass(AlertedToken);
