export default interface IEvent {
  id?: number;
  descricao?: string;
  nome?: string;
  imagem?: {
    data: Blob | null | string
  }
  privado?: boolean;
  gratuito?: boolean;
  id_usuario?: number;
  data?: string
  valor?: number;
}
