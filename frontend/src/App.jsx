// frontend/src/App.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
// No CSS import needed if App.css was deleted

function App() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSummarizeClick = async () => {
    setIsLoading(true);
    setError(null);
    setSummary('');
    try {
      const response = await fetch('http://localhost:3000/summarize');
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (_jsonError) {
          throw new Error(`HTTP error! status: ${response.status}, non-JSON response`);
        }
        throw new Error(errorData?.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      console.error('Error fetching summary:', err);
      setError(err.message.includes('Failed to fetch') ? 'Could not connect to the server. Please check if it is running.' : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex vh-100 justify-content-center align-items-center bg-light px-0">
      <Row className="justify-content-center w-100">
        <Col xl={7} lg={8} md={10} sm={12}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4 p-md-5">
              <h1 className="mb-3 text-center fw-bold">Article Summarizer</h1>
              <p className="lead mb-4 text-center text-muted">
                Click the button below to get a summary and analysis of the article.
              </p>

              <div className="d-grid gap-2 col-8 col-md-6 mx-auto mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSummarizeClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Summarizing...
                    </>
                  ) : (
                    'Summarize Article'
                  )}
                </Button>
              </div>

              {error && (
                <Alert variant="danger" className="mt-4 d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <div>
                    <strong>Error:</strong> {error}
                  </div>
                </Alert>
              )}

              {summary && !error && (
                <div className="mt-4">
                  <h2 className="text-center mb-3 fs-5 fw-medium">Summary and Analysis</h2>
                  <pre
                    className="bg-light border rounded p-3 font-monospace overflow-auto"
                    style={{ whiteSpace: 'pre-wrap', minHeight: '200px' }}
                  >
                    {summary}
                  </pre>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;