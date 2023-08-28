import { Fragment, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import {
  changeAcademyName,
  swapAcademyAddress,
} from "../actions/academy.action";
import { TextField } from "@mui/material";

interface StateProps {
  name: string;
  address: AddressProps[];
}
interface AddressProps {
  street: string;
  ward: string;
  number: number;
  city: string;
}

const AcademyInfo = () => {
  const dispatch = useDispatch();
  const academyState: StateProps = useSelector(
    (state: any) => state.academyReducer
  );
  const [academyName, setAcademyName] = useState<string>(academyState.name);
  console.log(academyState);
  return (
    <Fragment>
      <TitleBlock>
        <Row>
          <Col xs={6}>
            <h2>Academy Info</h2>
          </Col>
          <Col xs={6} className="text-end">
            <Button onClick={() => dispatch(swapAcademyAddress())}>Swap</Button>
          </Col>
        </Row>
        <Row className="mt-1 mb-3">
          <Col xs={6}>
            <TextField
              label="Academy"
              defaultValue={academyName}
              onChange={(event: any) => setAcademyName(event?.target?.value)}
            />
          </Col>
          <Col xs={6} className="text-end">
            <Button
              onClick={() => {
                if (academyName) {
                  dispatch(changeAcademyName(academyName));
                }
              }}
            >
              Change name
            </Button>
          </Col>
        </Row>
      </TitleBlock>
      <TableInfo>
        <tbody>
          <tr>
            <th>Academy name : </th>
            <td>{academyState.name}</td>
          </tr>
          {academyState.address.map((item: AddressProps, index: number) => (
            <tr key={index}>
              <th>Address {index + 1}</th>
              <td>{`${item.number} ${item.street},${item.ward},${item.city}`}</td>
            </tr>
          ))}
        </tbody>
      </TableInfo>
    </Fragment>
  );
};

export default AcademyInfo;

const TableInfo = styled.table`
  border: 1px solid blue;
  width: 50vw;
  & th,
  td {
    border: 1px solid blue;
    padding: 10px;
  }
`;

const TitleBlock = styled.div`
  width: 50vw;
`;
