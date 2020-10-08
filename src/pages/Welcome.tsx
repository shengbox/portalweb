import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Calendar } from 'antd';
import styles from './Welcome.less';


export default (): React.ReactNode => (
  <PageContainer>
    <Row>
      <Col span={11}>
        <Row>
          <Col span={24}>
            <Card title='TODO'>
              <Alert
                message="hello"
                type="success"
                showIcon
                banner
                style={{ margin: -12, marginBottom: 24, }}
              />
            </Card>
          </Col>

          <Col span={24} style={{ marginTop: 16 }}>
            <Card title='TODO'>
              <Alert
                message="hello"
                type="success"
                showIcon
                banner
                style={{ margin: -12, marginBottom: 24, }}
              />
            </Card>
          </Col>
        </Row>

      </Col>

      <Col span={8} offset={1}>
        <Card title='Calendar'>
          <Calendar fullscreen={false} />
        </Card>
      </Col>
    </Row>
  </PageContainer>
);
