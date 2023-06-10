import {
  BugReport,
  ExpandMore,
  ForkRightOutlined,
  StarBorderOutlined,
  TheaterComedyOutlined,
} from "@mui/icons-material";
import { AccordionSummary, Avatar, Box, Link } from "@mui/material";
import { Description, Label, Title } from "components/Typography";

import {
  AccordionContainer,
  BoxStargazers,
  Container,
  WapperAccordionDetails,
  WrapperAvatar,
  WrapperIcon,
  WrapperLeftCard,
  WrapperRightCard,
  WrapperStargazers,
} from "./styles";
import { AccordionSchema, DetailAccordionSchema } from "interface/accordion";
import Empty from "components/Empty";
import theme from "assets/theme";

const AccordionComponent = ({
  data,
  onClickAccordionSummary,
}: AccordionSchema) => {
  return (
    <Container>
      <AccordionContainer key={data.login}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={() => onClickAccordionSummary(data.login)}
        >
          <WrapperAvatar>
            <Avatar
              alt="avatar"
              src={data.avatar_url}
              sx={{
                background: theme.palette.background.default,
                marginRight: 2,
              }}
            />

            <Title>{data.login.replace(/^\w/, (c) => c.toUpperCase())}</Title>
          </WrapperAvatar>
        </AccordionSummary>
        <Box sx={{ maxHeight: "35vh", overflow: "auto" }}>
          {data?.repos && data?.repos.length ? (
            data.repos.map((repodetail: DetailAccordionSchema, key: number) => (
              <WapperAccordionDetails key={key}>
                <WrapperLeftCard>
                  <WrapperIcon>
                    <ForkRightOutlined
                      sx={{ color: theme.palette.background.default }}
                    />
                    <Label sx={{ color: theme.palette.background.default }}>
                      {repodetail?.forks || "0"}
                    </Label>
                  </WrapperIcon>
                  <WrapperIcon>
                    <TheaterComedyOutlined
                      sx={{ color: theme.palette.background.default }}
                    />
                    <Label sx={{ color: theme.palette.background.default }}>
                      {repodetail?.watchers || "0"}
                    </Label>
                  </WrapperIcon>
                  <WrapperIcon>
                    <BugReport
                      sx={{ color: theme.palette.background.default }}
                    />
                    <Label sx={{ color: theme.palette.background.default }}>
                      {repodetail?.open_issues || "0"}
                    </Label>
                  </WrapperIcon>
                </WrapperLeftCard>
                <WrapperRightCard>
                  <Box>
                    <Title>{repodetail.name}</Title>
                    <Description> {repodetail.description}</Description>
                  </Box>
                  <Box>
                    <Link
                      sx={{ cursor: "pointer" }}
                      href={repodetail.branches_url}
                    >
                      Repository
                    </Link>
                  </Box>
                </WrapperRightCard>
                <WrapperStargazers>
                  <BoxStargazers>
                    <Label>{repodetail?.stargazers_count || "0"}</Label>
                    <StarBorderOutlined />
                  </BoxStargazers>
                </WrapperStargazers>
              </WapperAccordionDetails>
            ))
          ) : (
            <>
              <Empty type="repo" />
            </>
          )}
        </Box>
      </AccordionContainer>
    </Container>
  );
};
export default AccordionComponent;
