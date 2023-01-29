import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  Card,
} from "@fluentui/react-components/unstable";
import {
  CardSpinner,
  CustomText,
  // CustomPagination,
  EmptyMessage,
  // CUSTOM_PAGINATION_PROPS,
} from "src/components";
import styled from "styled-components";

const TableComponentContainer = styled("div")`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  height: fit-content;
  max-height: 100%;
  padding: 20px;
  padding-top: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const StyledTableContainer = styled(Card)`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  max-height: 100%;
  overflow: overlay;
`;

const StyledTableHeader = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const StyledPaginationContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

// const StyledTableCell = styled(TableCell)(
//   ({ theme }) => `
//     color: unset;
//     // background-color: ${theme}
// `
// );

export interface CUSTOM_TABLE_PROPS {
  columns: { Header: string; accessor: string }[];
  data: object[];
  title?: string;
  actions?: React.ReactNode;
  loading?: boolean;
  emptyMessage?: string;
  renderAs?: {
    [key: string]:
      | ((props: {
          rowData?: any;
          content?: any;
          index?: number;
        }) => React.ReactElement)
      | null;
  };
  // paginationProps?: CUSTOM_PAGINATION_PROPS;
  paginationContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

export function CustomTable(props: CUSTOM_TABLE_PROPS) {
  const {
    columns,
    data,
    title,
    actions,
    loading,
    emptyMessage,
    paginationContainerProps,
    renderAs,
    // paginationProps,
  } = props;

  return (
    <TableComponentContainer>
      <StyledTableHeader>
        <CustomText as="h1">{title}</CustomText>
        {actions}
      </StyledTableHeader>
      <StyledTableContainer className="custom-scrollbar">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((cell, index) => (
                <TableHeaderCell key={index}>
                  <CustomText as="h3">{cell.Header}</CustomText>
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          {!loading && data.length > 0 ? (
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((cell, ind) => {
                    const RenderAsComponent =
                      renderAs && renderAs[cell.accessor];
                    const Component = RenderAsComponent
                      ? (renderAsProps) => (
                          <RenderAsComponent
                            {...renderAsProps}
                            content={row[cell.accessor]}
                            index={index}
                            rowData={data[index]}
                          >
                            {renderAsProps.children}
                          </RenderAsComponent>
                        )
                      : (tableCellProps: any) => (
                          <TableCell as="td">
                            <CustomText>{tableCellProps.children}</CustomText>
                          </TableCell>
                        );
                    return (
                      <Component key={ind}>{row[cell.accessor]}</Component>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
        {loading ? (
          <CardSpinner withContainer={false} />
        ) : data.length === 0 ? (
          <EmptyMessage align="center" as="h4">
            {emptyMessage || "No data found"}
          </EmptyMessage>
        ) : null}
      </StyledTableContainer>
      <StyledPaginationContainer {...paginationContainerProps}>
        {/* <CustomPagination numberPagination={false} {...paginationProps} /> */}
      </StyledPaginationContainer>
    </TableComponentContainer>
  );
}
