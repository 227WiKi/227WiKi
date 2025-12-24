def define_env(env):

    @env.macro
    def member(name, role, image, link):
        """
        生成成员卡片的 HTML 代码
        调用方式: {{ member('名字', '角色', '图片链接', '跳转链接') }}
        """
        # 使用 f-string 生成 HTML，保持结构紧凑以防 Markdown 解析错误
        html = f"""
        <div class="member-card">
            <img src="{image}" alt="{name}">
            <div class="member-info">
                <span class="member-name">{name}</span>
                <span class="member-role">{role}</span>
            </div>
            <a href="{link}" class="card-link"></a>
        </div>
        """
        return html.replace('\n', '').strip()
    @env.macro
    def disc(title, type_name, date, image, link):
        """
        生成唱片/专辑卡片
        调用: {{ disc('标题', '类型/编号', '发售日', '图片链接', '跳转链接') }}
        示例: {{ disc('僕は存在していなかった', '1st Single', '2017.09.20', 'img/1st.jpg', 'disc/1st/') }}
        """
        html = f"""
        <div class="disc-card">
            <img src="{image}" alt="{title}">
            <div class="disc-info">
                <span class="disc-type">{type_name}</span>
                <span class="disc-title">{title}</span>
                <span class="disc-date">{date}</span>
            </div>
            <a href="{link}" class="card-link"></a>
        </div>
        """
        return html.replace('\n', '').strip()