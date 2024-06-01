import { EnumRelationShip, EnumRole } from 'src/ts/enum';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column()
  password: string;

  @Column()
  role: EnumRole;

  @Column()
  isActive: number;

  @Column()
  usersBlocked: string[];

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  company: string;

  @Column()
  university: string;

  @Column()
  relationship: EnumRelationShip;

  @Column()
  files: string[];

  @Column()
  dayOfBirth: string;

  @Column()
  gender: number;

  @Column()
  avatar: string;

  @Column()
  coverImage: string;

  @Column()
  phone: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
