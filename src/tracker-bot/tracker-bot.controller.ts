import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { TrackerBotService } from './tracker-bot.service';

@Controller('tracker-bot')
export class TrackerBotController {
  constructor(private botService: TrackerBotService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  queryBlockchain() {
    return this.botService.saveAlertedTokens();
  }

  @HttpCode(HttpStatus.OK)
  @Get('tokens')
  allToken() {
    return this.botService.sendTokens();
  }
}
