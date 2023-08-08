import { AssetConfiguration } from './assetConfiguration';
import { Replicate } from './replicate';
import { State } from './state';

/**
 * One of the Real-Time types as defined in section G.2 Common Message Types and Annex H.
 */
export type RtType = State | AssetConfiguration | Replicate;
