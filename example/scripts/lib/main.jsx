var mount = document.getElementById('js-example');

var Main = React.createClass({
  render: function () {
    return (
      <Container fluid={ true }>
        <Row>
          <Column extraSmall={ 12 }
                  small={ 1 }
                  medium={ 4 }
                  large={ 8 }
                  largeOffset={ 4 }>
            <p>
              Some text inside a column!
            </p>
          </Column>
        </Row>
      </Container>
    )
  }
});

React.render(<Main />, mount);
