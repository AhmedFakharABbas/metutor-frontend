export class TicketReply {
  id: number;
  number: number;
  reply: string;
  replyBy: number;
  avatar: string;
  officialName: string;
  userType: string;
  attachedFile: string;
  createdDate: string;

  constructor(createDefault = false, reply: any = null) {
    if (createDefault) {
      this.id = 0;
      this.number = 0;
      this.reply = '';
      this.replyBy = 0;
      this.avatar = '';
      this.officialName = '';
      this.userType = '';
      this.attachedFile = '';
      this.createdDate = '';
    }
    if (reply) {
      this.id = reply.id;
      this.number = reply.number;
      this.reply = reply.reply;
      this.replyBy = reply.reply_by;
      this.avatar = reply.avatar;
      this.officialName = reply.official_name;
      this.userType = reply.user_type;
      this.attachedFile = reply.attached_file;
      this.createdDate = reply.created_date;
    }
  }
}
