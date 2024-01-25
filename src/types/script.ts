import scriptInfo from "./scriptInfo";

class Script extends scriptInfo {
  constructor(
    id: number,
    name: string,
    status: string,
    public config: JSON,
    public logs: string
  ) {
    super(id, name, status);
    this.config = config;
    this.logs = logs;
  }
}

export default Script;
