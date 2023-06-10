import { shallowEqual } from "react-redux";
import { actionGetReposDetail } from "store/action/dashboard/actionSearch";
import { useAppDispatch, useAppSelector } from "store/store";
import { Label } from "components/Typography";
import { Accordion, Empty, Loader } from "components";
import FirstInitializatio from "assets/img/github-logo.png";
import {
  Container,
  WrapperAccordion,
  WrapperFirstInitialization,
} from "./style";
import { UserDetail } from "interface/accordion";

function RightSection({ isfirstInitialization }: any) {
  const dispatch = useAppDispatch();
  const { username, user, isLoading } = useAppSelector(
    ({ dashboardReducer, generalReducer }) => ({
      username: dashboardReducer.username,
      user: dashboardReducer.user,
      isLoading: generalReducer.isLoading,
    }),
    shallowEqual
  );

  const handleGetReposDetail = (val: string) => {
    dispatch(actionGetReposDetail(val));
  };

  return (
    <Container>
      {isfirstInitialization ? (
        <WrapperFirstInitialization>
          <img
            src={FirstInitializatio}
            alt="github-logo"
            style={{ height: "80%", width: "80%" }}
          />
          <Label>Build by Github Api</Label>
        </WrapperFirstInitialization>
      ) : (
        <WrapperAccordion>
          {username && user.length ? (
            <Label> Showing User for : "{username}" </Label>
          ) : (
            <></>
          )}
          {isLoading ? (
            <Loader />
          ) : user.length === 0 ? (
            <Empty />
          ) : (
            user.map((val: UserDetail, key: number) => (
              <Accordion
                key={key}
                data={val}
                onClickAccordionSummary={handleGetReposDetail}
              />
            ))
          )}
        </WrapperAccordion>
      )}
    </Container>
  );
}

export default RightSection;
