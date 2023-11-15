import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from "react-bootstrap/Dropdown";

export const Layout = () => {
  return (
    <>
      <Container id="container-Layout">
        <div className="flex flex-col mt-8 text-justify">
          <div className="flex justify-center items-center">
            <h1 className="mr-4">Latest posts</h1>
            <Dropdown data-bs-theme="light">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Programming</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Lifestyle</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Computers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Row>
            <Col className="article-preview-Layout " sm>
              <h2>Title of this post</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit voluptatum minus dolores animi commodi sit,
                aliquid corporis officiis possimus impedit rem iure at
                necessitatibus vitae veniam nisi dignissimos! Quae minima
                aliquid ex illum maiores culpa iste, omnis laboriosam debitis
                dicta sed cum dolorem? Recusandae harum animi reiciendis nam vel
                laudantium autem possimus blanditiis ab voluptatum ullam nulla
                ex obcaecati id exercitationem dolorem quo expedita eos placeat
                sint, labore in minus rem. Laboriosam quam sapiente numquam
                veritatis rerum ratione deserunt at earum odio molestias,
                assumenda corporis delectus. Sint sit ea vitae ipsum distinctio
                aliquid fugit aperiam accusamus ducimus provident ipsam
                excepturi ab et tempore consectetur autem reprehenderit a totam
                expedita enim neque, eum voluptatum commodi. Saepe a beatae quas
                ab. Beatae, sequi dolor.
              </p>
            </Col>
            <Col className="article-preview-Layout" sm>
              <h2>Title of this post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                sed blanditiis placeat ipsa totam et, consectetur dolor
                perspiciatis iure recusandae mollitia necessitatibus ab incidunt
                debitis illo, eaque temporibus rerum, quo eum repudiandae
                laborum. Laborum debitis nam, esse optio excepturi non
                asperiores consequatur? Alias, numquam ullam suscipit delectus
                praesentium adipisci magni doloremque saepe sunt eius vitae
                perspiciatis. Quis ad reprehenderit nulla, voluptatibus at non
                eligendi officiis expedita quasi itaque hic necessitatibus
                molestiae, autem quo distinctio qui.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="article-preview-Layout">
              <h2>Title of this post</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem veniam quia sunt cumque porro atque vel rerum, doloribus
                sequi numquam, nisi incidunt inventore doloremque voluptas
                asperiores quaerat hic repudiandae, non tenetur. Ad adipisci
                praesentium minima provident, tenetur commodi necessitatibus
                neque, natus harum voluptatum non aspernatur id corrupti
                voluptates aut libero illum. Corrupti nam officiis repellendus?
              </p>
            </Col>
            <Col className="article-preview-Layout">
              <h2>Title of this post</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quibusdam, placeat porro quam excepturi tempore dicta earum
                deserunt dignissimos nulla est maiores ut doloremque eveniet
                ullam rem. Ipsam ad esse necessitatibus ex accusantium ipsum,
                quos quae adipisci inventore odit consectetur, totam architecto
                nostrum ducimus, atque dolores dignissimos quod nulla tempore
                facilis. Accusamus enim, exercitationem similique aliquam cumque
                sequi temporibus, beatae vel dignissimos sed libero. Aliquam
                vero unde impedit, ullam quidem adipisci, laborum praesentium
                eveniet doloremque sed nemo delectus. Quo, facilis ratione.
                Fugit perspiciatis aliquam cum esse, sunt debitis deserunt
                adipisci cupiditate minima corporis sapiente animi ea voluptates
                accusantium nihil! Enim?
              </p>
            </Col>
            <Col className="article-preview-Layout">
              <h2>Title of this post</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quisquam incidunt impedit nobis saepe quidem nesciunt est veniam
                quo, expedita sunt illum ut vitae reprehenderit.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
