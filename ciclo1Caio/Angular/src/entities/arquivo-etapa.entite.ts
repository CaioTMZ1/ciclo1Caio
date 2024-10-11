export class ArquivoEtapaEntitie {
  etapa_id!: number;
  arquivo_id!: string;
  usuario_id!: number;
  arquivo_descricao!: string;
  arquivo_data!: Date;
  arquivo_versao!: string;
  arquivo_link!: string;
  arquivo_extensao!: string;
  arquivo_status!: number;
  local_id!: number;
  projeto_id!: number;
  arquivo_id_pai!: string;
  arquivo_tamanho!: number;
}

// "etapa_id": 1,
//     "arquivo_id": "40111559-0387-41af-a08f-2d34dd171478",
//     "usuario_id": 5,
//     "arquivo_descricao": "arquivo_planta_banheiro.txt",
//     "arquivo_data": "2024-07-10T21:17:13.000Z",
//     "arquivo_versao": "0",
//     "arquivo_link": "4/d4923bf0-5a0b-4f73-9b3f-a03bf8a53831",
//     "arquivo_extensao": "txt",
//     "arquivo_status": 1,
//     "local_id": null,
//     "projeto_id": 4,
//     "arquivo_id_pai": null,
//     "arquivo_tamanho": null
