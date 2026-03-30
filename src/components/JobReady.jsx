import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const JobReady = () => {
  return (
    <Container fluid className="bg-white">
      <Row className="align-items-center my-5">
        {/* Image First for Mobile, Second for Desktop */}
        <Col xs={{ order: 1 }} md={{ span: 5, order: 2 }} className="text-center">
          <Card className="border-0">
            <Image
              src="/Images/wmremove-transformed.jpeg"
              alt="Healthcare Professional"
              className="rounded-2xl shadow-lg"
              fluid
            />
          </Card>
        </Col>

        {/* Text Second for Mobile, First for Desktop */}
        <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}>
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-4xl font-black text-black tracking-tight mb-4">
                Become <span className="text-red-600 font-black">Job-ready</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Take advantage of our free English language and workplace skills classes, designed to equip you with everything you need to stand out and thrive at your workplace.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-4xl font-black text-black tracking-tight mb-4">
                Become Part of a <span className="text-red-600 font-black">Prestigious Industry</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Train with our network of 1100+ training partners in premier healthcare settings to gain invaluable industry experience that will shape your future career and enrich your professional journey.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-4xl font-black text-black tracking-tight mb-4">
                Become a <span className="text-red-600 font-black">Lifelong Learner</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Learn anytime and anywhere on our myCareer app. Access study material, get your doubts resolved and stay connected with your peers wherever you are.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobReady;