import json
from pathlib import Path


def define_env(env):

    members_map = None

    def load_members_map():
        nonlocal members_map
        if members_map is not None:
            return members_map

        data_file = Path(__file__).resolve().parent / "docs" / "_static" / "data" / "members.json"
        try:
            data = json.loads(data_file.read_text(encoding="utf-8"))
            members = data.get("members", []) if isinstance(data, dict) else []
            members_map = {
                str(member.get("slug")): member
                for member in members
                if isinstance(member, dict) and member.get("slug")
            }
        except Exception:
            members_map = {}

        return members_map

    def build_avatar_url(slug, status="active", explicit_avatar=""):
        if explicit_avatar:
            return explicit_avatar

        if status == "graduated":
            return f"https://res.227wiki.eu.org/photo/avatar/graduated/{slug}.jpg"

        return f"https://res.227wiki.eu.org/photo/avatar/16th/{slug}.jpg"

    @env.macro
    def member(name, role, slug, default_status="active"):
        """
        生成成员卡片的 HTML 代码
        调用方式: {{ member('名字', '角色', 'slug') }}
        """
        slug = str(slug)
        member_item = load_members_map().get(slug, {})
        status = str(member_item.get("status", default_status))
        explicit_avatar = str(member_item.get("avatar", ""))
        image = build_avatar_url(slug=slug, status=status, explicit_avatar=explicit_avatar)
        link = f"/member/{slug}/"

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

    @env.macro
    def live(title, date, venue, image, link):
        html = f"""
        <div class="live-card">
            <img src="{image}" alt="{title}">
            <div class="live-info">
                <span class="live-date">{date}</span>
                <span class="live-title">{title}</span>
                <span class="live-venue">{venue}</span>
            </div>
            <a href="{link}" class="card-link"></a>
        </div>
        """
        return html.replace('\n', '').strip()