# Database Definition : Firestore   

GUID is "Globally Unique IDentifier", which might be made by microsoft's function before inserting it DB.


### users  
user buys course.  
user-id = uid  
```
{
    uid:num,
    name:text,
    mail_address:text,
    subscribed: [ {
            cid:num, 
            purchased_date: datetime, 
            continue: bool
            } ],
    account_active: bool,
    first_date:datetime,
    last_login:datetime
}
```

### teachers
Teacher can be user. but they should creat user-account.  
teacher-id = tid   

```
{
    tid:num,
    name:text,
    mail_address:text,
    used_data_size: num,
    courses[ cid:num ],
    account_active: bool,
    first_date:datetime,
    last_login:datetime
}
```

### courses  
A course has lessons.  
course-id = cid  
```
{
    cid:num,
    course_title:text,
    abstract:text,
    tags:text,
    thumbnail_url:text,
    main_banner_url:text,
    lessons:[lid:num],
    tid:num,
    subscribed_users:[uid:num],
    on_air : bool,
    price:num
}
```

### lessons  
```
{
    lid:num,
    lesson_title:text,
    thumnail_url:text,
    scene_id: GUID
}
```

### orders  
we cannot lost data about purcase. so we record it log and this database. 

```
{
    oid: num,
    uid: num,
    cid: num,
    order_date: datetime,
    cancel_date: datetime
}
```

### scenes
A scene is for management contents.
It has media-ids.

```
{
    sid: num,
    tid : num,
    lid : num,
    scene_id : GUID,
    scene_title: text,
    number_of_camera: num,
    videos : [mid : num, object_guid: guid],upload_datetime: datetime,
    play_time: num,
    data_size: num
}
```


### uploaded_videos

```
{
    mid: num,
    tid: num,
    object_guid: guid,
    title: string,
    scene_id: guid,
    color_flag: boolean,
    data_size: num,
    upload_datetime: datetime,
    play_time: num,
    twin_id: guid
}
```


