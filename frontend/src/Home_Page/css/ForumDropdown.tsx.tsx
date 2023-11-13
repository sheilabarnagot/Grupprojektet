import Dropdown from "react-bootstrap/Dropdown";

export const ForumDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Programming</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Lifestyle</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Computers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
