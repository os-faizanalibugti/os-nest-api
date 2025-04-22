import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';

import { AccessToken } from 'livekit-server-sdk';

function getLoggedInUser(headers, jwt) {
  const userJWTToken = headers['authorization'].split('Bearer').join('').trim();
  const decodedToken = jwt.decode(userJWTToken, { complete: true });
  console.log(decodedToken);
  return decodedToken.payload;
}

@Injectable()
export class VcService {
  // LiveKit Credentials
  private host = 'https://vc-ua59wquz.livekit.cloud';
  private apiKey = 'APIUWbEK7Bgv4uk';
  private apiSecret = 'B01eJwOOo29uuWSVO7LNc1n6VJHrFJgOAuXfozNctSc';

  constructor(private jwt: JwtService) {}

  generateToken(headers, { lessonId }) {
    const user = getLoggedInUser(headers, this.jwt);

    const at = new AccessToken(this.apiKey, this.apiSecret, {
      identity: `${user.id}`,
      ttl: '4h',
    });

    at.addGrant({
      room: lessonId,
      roomJoin: true,
      // roomCreate: isHost,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
    });

    const token = at.toJwt();

    return { meetingCred: token, wsUrl: 'wss://vc-ua59wquz.livekit.cloud' };
  }

  create(createVcDto: CreateVcDto) {
    return 'This action adds a new vc';
  }

  findAll() {
    return `This action returns all vc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vc`;
  }

  update(id: number, updateVcDto: UpdateVcDto) {
    return `This action updates a #${id} vc`;
  }

  remove(id: number) {
    return `This action removes a #${id} vc`;
  }
}
