import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useRef } from 'react';
import { Button, Col, Row } from 'antd';
import { queryRoom, getVideoToken, createRoom } from './service';

export default () => {
  const myselfRef = useRef<HTMLVideoElement>(null!);
  const participantRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => { }, []);

  const handleVideo = async (roomName: string) => {
    // if room not exist, create it 
    const room = await queryRoom({ roomName })
    if (room.error) {
      await createRoom({ roomName })
    }

    const el = myselfRef.current;

    const { connect, createLocalTracks } = require('twilio-video');

    // show localTrack
    const localTracks = await createLocalTracks({ audio: true, video: { width: 640 } })
    const videoTrack = localTracks.find((track: any) => track.kind.includes('video'));
    videoTrack.attach(el);

    // join room
    const token = await getVideoToken({ identity: 'jack' + Math.random(), roomName })
    console.log(token)

    connect(token, { name: roomName, tracks: localTracks }).then((room: any) => {
      console.log(`Successfully joined a Room: ${room}`);

      room.on('participantConnected', (participant: any) => {
        console.log(`A remote Participant connected: ${participant}`);

        participant.tracks.forEach((publication: any) => {
          if (publication.isSubscribed) {
            const track = publication.track;
            track.attach(participantRef.current);
          }
        });

        participant.on('trackSubscribed', (track: any) => {
          track.attach(participantRef.current);
        });
      });

    }, (error: any) => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
  }

  return (
    <PageContainer breadcrumb={{}}>
      <Row>
        <Col span={6} style={{ backgroundColor: 'white', height: 'calc(100vh - 260px)' }}>
          <Button type='primary' onClick={() => { handleVideo('room001') }}>video conference 001</Button>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={8}>
              <video ref={myselfRef} style={{ width: '100%' }} />
            </Col>
            <Col span={8}>
              <video ref={participantRef} style={{ width: '100%' }} />
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};
