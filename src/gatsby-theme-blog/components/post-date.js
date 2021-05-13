/** @jsx jsx */
import { Themed, jsx } from "theme-ui"

const PostDate = (props) => (
  <Themed.p
    sx={{
      fontSize: 1,
      mt: 0,
      mb: 3,
    }}
    {...props}
  />
)

export default PostDate
