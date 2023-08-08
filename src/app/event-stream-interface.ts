export default interface StreamDataInterface {
  id?: string;
  event: 'upsert' | 'delete' | 'keep-alive';
  data: string;
}
