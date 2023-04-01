import { Typography } from "@mui/material";

const MUITypography = () => {
    return <>
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4">h4 heading</Typography>
        <Typography variant="h5" component={"h2"}>h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <hr />
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolor, nihil minus beatae eveniet unde itaque praesentium assumenda quae iure esse asperiores inventore iusto. Iusto saepe numquam blanditiis ad. Exercitationem.</Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nisi fuga tempora deserunt earum molestiae ipsam modi a quaerat vitae. Provident beatae cumque ab quas et temporibus quos atque accusantium?</Typography>
        <hr />
        <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa ipsam nisi eos dolorum veritatis, ducimus sint veniam neque minus expedita ullam, earum explicabo recusandae hic, harum unde est nostrum?</Typography>
        <Typography variant="subtitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa ipsam nisi eos dolorum veritatis, ducimus sint veniam neque minus expedita ullam, earum explicabo recusandae hic, harum unde est nostrum?</Typography>
    </div>
    </>
}

export default MUITypography