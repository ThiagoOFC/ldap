import { Test, TestingModule } from '@nestjs/testing';
import { MudarArquivoService } from './mudar-arquivo.service';

describe('MudarArquivoService', () => {
  let service: MudarArquivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MudarArquivoService],
    }).compile();

    service = module.get<MudarArquivoService>(MudarArquivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
