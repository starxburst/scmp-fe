import { format } from "date-fns"
import { Poll } from "../types/pollSchema"

type PollDateProps = {
  date: Poll['publishedDate']
}


const PollDate = ({date}: PollDateProps): JSX.Element => {

  return (
    <div>
      {format(new Date(date * 1000), 'dd MMM yyyy')}
    </div>
  )
}

export default PollDate